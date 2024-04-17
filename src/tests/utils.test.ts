import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { convertISOToReadableTime } from "@/utils/convertDate";
import { getTicketBgColor } from "@/utils/getTicketBgColor";
import { describe, test, expect } from "@jest/globals";

describe("capitalizeFirstLetter function", () => {
  test("it should capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("test")).toBe("Test");
  });

  test("it should return an empty string if input is empty", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });
});

describe("convertISOToReadableTime function", () => {
  test("it should convert an ISO string to a readable time format", () => {
    const isoString = "2024-04-16T12:00:00Z";
    expect(convertISOToReadableTime(isoString)).toMatch(
      /April 16, 2024 at 12:00:00 PM/,
    );
  });
});

describe("getTicketBgColor function", () => {
  test("it should return the correct background color based on ticket status", () => {
    expect(getTicketBgColor("pending")).toBe("#E0E0E0");
    expect(getTicketBgColor("accepted")).toBe("#DCEDC8");
    expect(getTicketBgColor("resolved")).toBe("#E3F2FD");
    expect(getTicketBgColor("rejected")).toBe("#FFCDD2");
    expect(getTicketBgColor("invalid")).toBe("#EF9A9A");
  });
});
