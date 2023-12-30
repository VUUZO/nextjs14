'use server'

import User from "@/database/user.model";
import { connectToDatabase } from "../db";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase()

    const { userId, limit = 3 } = params

    const user = await User.findById(userId)

    if (!user) throw new Error("User not found")
    // TODO: Interaction...

    return [
      { _id: 1, name: 'some' },
      { _id: 2, name: 'mock' },
      { _id: 3, name: 'data' },
    ]
  } catch (error) {
    console.log(error)
    throw error
  }
}