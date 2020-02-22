import { Router } from "express";
import fetch from "node-fetch";
import { distanceTo } from "geolocation-utils";
const router = Router();

const findTheClosest = (drugstores, query) => {
  const closest = drugstores.data
    .map(({ id, attributes: { lat, lon } }) => ({
      id,
      distance: distanceTo(
        { lat, lon },
        { lat: query.lat * 1, lon: query.lon * 1 }
      )
    }))
    .sort((a, b) =>
      a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0
    )[0];

  return fetch(
    `https://wydfdauvw5.execute-api.sa-east-1.amazonaws.com/desafio/farmacias/${closest.id}`
  )
    .then(response => response.json())
    .then(x => ({
      ...x,
      data: {
        ...x.data,
        attributes: {
          distance: `${closest.distance.toFixed(2)} metros`,
          ...x.data.attributes
        }
      }
    }));
};

router.get("/", async (req, res) => {
  try {
    const drugstores = await fetch(
      "https://wydfdauvw5.execute-api.sa-east-1.amazonaws.com/desafio/farmacias"
    ).then(response => response.json());
    const closest = await findTheClosest(drugstores, req.query);
    return res.send(closest);
  } catch (error) {
    return res.send({ error: `error` });
  }
});

export default router;
