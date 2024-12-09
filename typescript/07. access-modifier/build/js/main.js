"use strict";
// public: default. 어디서나 접근 가능
// protected: 클래스 내, 상속받은 클래스 접근 가능
// private: 클래스 내에서만 접근 가능
class PostA {
    // public id: number = 0;
    // protected title: string = "";
    // constructor(id: number, title: string) {
    //   this.id = id;
    //   this.title = title;
    // }
    constructor(id = 0, title = "") {
        this.id = id;
        this.title = title;
        this.id = id;
        this.title = title;
    }
    getPost() {
        return `postId: ${this.id}, postTitle: ${this.title}`;
    }
}
class PostB extends PostA {
    getPost() {
        return `postId: ${this.id}, postTitle: ${this.title}`;
    }
}
let post = new PostA(1, "title 1");
console.log(post.id);
// console.log(post.title); // protected라서 'PostA 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.'라고 뜨며 error
console.log(post.getPost());
