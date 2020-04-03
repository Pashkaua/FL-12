import { TestBed } from "@angular/core/testing";

import { CreditCardService } from "./credit-card.service";

describe("CreditCardService", () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it("should create CreditCardService", async () => {
    expect(service).toBeTruthy();
  });

  it("should return UNKNOWN_TYPE on invalid credit type ", () => {
    expect(service.testCreditCard("999 666 999 ", "Kolomoiskyi Bank")).toEqual({
      isValid: false,
      message: "Unknown card type"
    });
  });

  it("should return INVALID_NUMBER on invalid number ", () => {
    expect(service.Card("6011 0000 0000 0004", "JCB")).toEqual({
      isValid: false,
      message: "Credit card number is in invalid"
    });
  });

  it("should return INVALID_NUMBER_FORMAT on incorrect number format", () => {
    expect(service.testCreditCard("A011 0000 0000 0004", "Discover")).toEqual({
      isValid: false,
      message: "Credit card number is in invalid format"
    });
  });

  it("should return SCAM_ATTEMPT on card number  scam attempt", () => {
    expect(service.testCreditCard("5490997771092064", "MasterCard")).toEqual({
      isValid: false,
      message:
        "Warning! This credit card number is associated with a scam attempt"
    });
  });

  it("should return INVALID_LENGTH on wrong card number legth ", () => {
    expect(service.testCreditCard("6011 0000 0000 000", "Discover")).toEqual({
      isValid: false,
      message: "Credit card number has an inappropriate number of digits"
    });
  });

  it("should return VALID_CARD if card is valid", () => {
    expect(service.testCreditCard("6011 0000 0000 0004", "Discover")).toEqual({
      isValid: true,
      message: "Credit card has a valid format"
    });
  });
});
