import { url, loading, succces, error, clear, find } from "./drugstores";
const payload = { data: "12345" };

describe("#loading()", () => {
  it("should dispatch the loading action", () => {
    const event = loading();
    expect(event).toStrictEqual({ type: "FETCH_DRUGSTORES" });
  });
});
describe("#error()", () => {
  it("should dispatch the error action", () => {
    const event = error();
    expect(event).toStrictEqual({ type: "FETCH_DRUGSTORES_ERROR" });
  });
});
describe("#clear()", () => {
  it("should dispatch the clear action", () => {
    const event = clear();
    expect(event).toStrictEqual({ type: "CLEAR_DRUGSTORES" });
  });
});
describe("#succces()", () => {
  it("should dispatch the succces action", () => {
    const event = succces();
    expect(event).toStrictEqual({
      payload: undefined,
      type: "FETCH_DRUGSTORES_SUCCESS"
    });
  });
  it("should dispatch the succces action whith payload", () => {
    const event = succces(payload);
    expect(event).toStrictEqual({
      payload,
      type: "FETCH_DRUGSTORES_SUCCESS"
    });
  });
});
describe("#find()", () => {
  const dispatch = jest.fn();

  it("should dispatch the find action with succces", async () => {
    fetch.mockResponseOnce(JSON.stringify(payload));
    await find()(dispatch);
    expect(dispatch).toHaveBeenNthCalledWith(1, loading());
    expect(dispatch).toHaveBeenNthCalledWith(2, succces(payload));
  });

  it("should dispatch the find action with fail", async () => {
    fetch.mockRejectOnce();
    await find()(dispatch);
    expect(dispatch).toHaveBeenNthCalledWith(1, loading());
    expect(dispatch).toHaveBeenNthCalledWith(2, error());
  });
});
