import 'sls-test-tools';
import { main } from "./handler";
import 'jest-extended'; // Add this import statement

describe("Get NFT", () => {

    it("should get data from Dynamo", async () => {
        // 🔥 trigger the initial event
        const list = await main();
        expect(list).toBeDefined();
    });

})