'use server'

import User from "@/database/user.model";
import { connectToDatabase } from "../db";
import { GetAllTagsParams, GetQuestionsByTagIdParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";
import Question from "@/database/question.model";

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase()
  
    const tags = await Tag.find({})
    return { tags }
  } catch (error) {
    console.log(error)
    throw error
  }
}

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