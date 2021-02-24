import { ValidateLoginNameRules } from "../../src/utils/validate";

test("ValidateLoginNameRules", () => {
    const y = "lzt22";
    const n = "88";
    expect(ValidateLoginNameRules(y)).toBeFalsy;
    expect(ValidateLoginNameRules(n)).toBeTruthy;
});
