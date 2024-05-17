export class Book{
    constructor(title,author,category,description,imgUrl,isAvailable){
        this.title=title;
        this.author=author;
        this.category=category;
        this.description=description;
        this.imgUrl=imgUrl;
        this.isAvailable=isAvailable;
    }
}

export class User{
    constructor(username,password,email,isAdmin){
        this.username=username;
        this.password=password;
        this.email=email;
        this.isAdmin=isAdmin;
    }
}
