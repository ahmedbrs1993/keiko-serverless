import 'sls-test-tools';
import { main } from "./handler";
import { get } from "../getNft/handler";

  // Test suite for Delete NFT
  describe("Delete NFT", () => {
  
    it("should delete from Dynamo", async () => {
      // Get All results
      let results = await get();

      // Get First Result
      let id:any = results[0].id;
      const event = { pathParameters: { id: id } };

      // Call the main function which triggers the delete operation
      let deleteNft:any = await main(event);
      
      expect(deleteNft?.$metadata?.httpStatusCode).toBe(200);
  
    });

  });