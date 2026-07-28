import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

const key = "odismfweoimseiofmsoe";

describe("getAPIKey", () => {
  test("valid header", () => {
    const headers = {
      authorization: `ApiKey ${key}`,
    };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeDefined();
    expect(apiKey).toEqual(key);
  });

  test("no auth header", () => {
    const headers = {
      contentLength: "10",
    };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });

  test("malformed auth header", () => {
    const headers = {
      authorization: `${key}`,
    };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });

  test("Bearer token auth header", () => {
    const headers = {
      authorization: `Bearer ${key}`,
    };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });
});
