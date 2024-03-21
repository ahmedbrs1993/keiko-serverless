import 'sls-test-tools';
import { main } from "./handler";

describe("Add NFT", () => {

  it("should upload data to Dynamo", async () => {
    // 🔥 trigger the initial event
    const generatedId = await main();

    // ✅ assert the functional behavior you are testing
    await expect({
      PK: "Nft",
      SK: generatedId,
    }).toExistInDynamoTable("keiko-serverless-dev-NFTtable202B9A43-9SEK5Z4J5VSH");
  });

})