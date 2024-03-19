import { getNft } from './getNft/config';
import { logMessage } from './logMessage/config';
import { createNft } from './createNft/config';
import { deleteNft } from './deleteNft/config';
import { upsertUser } from './upsertUser/config';
import { getNftPrice } from './getNftPrice/config';

export const functions = {
  getNft,
  logMessage,
  createNft,
  deleteNft,
  upsertUser,
  getNftPrice,
};
