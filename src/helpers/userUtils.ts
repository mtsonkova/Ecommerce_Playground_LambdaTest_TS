export function generateRandomEmail(): string {
    const randomNum = getRandomInt(1000);
    const epochMillis = Date.now(); // current time in milliseconds since epoch
    const email = `testuser${randomNum}_${epochMillis}@test.qa`;
    return email;
}


function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}