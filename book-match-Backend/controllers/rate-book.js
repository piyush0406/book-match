import { ConnectToDatabase } from "../helpers/db-helper.js";

export const rate_book_handler = async (req, res) => {
    try {
        const conn = await ConnectToDatabase();
        const { ans1, ans2, ans3 } = req.body;

        const books_col = conn.db("reach-best-project").collection("books");

        const matched_books = await books_col
            .aggregate([
                {
                    $project: {
                        _id: 0,
                        book: 1,
                        author: 1,
                        img_link: 1,
                        // adventurousness: 1,
                        // openness_to_experience: 1,
                        // optimism: 1,
                        diff: {
                            $add: [
                                {
                                    $pow: [
                                        {
                                            $subtract: [
                                                "$adventurousness",
                                                ans3
                                            ]
                                        },
                                        2
                                    ]
                                },
                                {
                                    $pow: [
                                        {
                                            $subtract: [
                                                "$openness_to_experience",
                                                ans1
                                            ]
                                        },
                                        2
                                    ]
                                },
                                {
                                    $pow: [
                                        {
                                            $subtract: ["$optimism", ans2]
                                        },
                                        2
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    $sort: {
                        diff: 1
                    }
                },
                {
                    $limit: 3
                }
            ])
            .toArray();

        res.json({ matched_books });
    } catch (error) {
        console.log({ error });
        res.status(400).json({ error });
    }
};
