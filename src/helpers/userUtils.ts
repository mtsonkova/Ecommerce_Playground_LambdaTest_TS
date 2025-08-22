export function generateRandomEmail(): string {
    let randomNum = getRandomInt(1000);
    let date = new Date();
    let dateToEpoch = date.getDate();
    let email = `testuser${randomNum.toString()}_${dateToEpoch}@test.qa`;
    return email;
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}