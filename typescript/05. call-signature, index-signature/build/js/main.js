"use strict";
const post0 = {
    id: 1,
    title: "post 1",
    getLikeNumber(like) {
        return like;
    },
};
post0.getLikeNumber(1);
const post1 = {
    id: 1,
    title: "post 1",
};
// interface에 [key: string]: unknown; 가 없었다면 에러
post1["description"] = "post1 description";
post1["pages"] = 300;
const userNames = ["Hyoju", "Gildong", "Yuri"];
userNames[0] === "Hyoju";
userNames[1] === "Gildong";
