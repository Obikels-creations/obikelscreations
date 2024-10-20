
// interface AuthorCardI {
// 	_id: string;
// 	slug: { current: string; _type: string };
// 	_createdAt: Date;
// 	name: string;
// 	bio: any;
// 	_updatedAt: string;
// 	image: { _type: string; alt: string; asset: {} };
// 	_rev: string;
// 	_type: string;
// }

interface IPost {
     _id: string;
     title: string;
     slug: { current: string };
     publisheddatetime: string;
     excerpt: string;
     overviewImage;
     author: AuthorCardI;
     body: any[];
     tag: Array<ITag>;
}

interface ITag {
     name: string;
     slug: { current: string };
     _id: string;
}

interface IBlogCard {
     post: IPost;
}

interface ISingleBlog {
     params: {
          slug: string;
     };
}

interface IFilter {
     status: string[];
     startDate: string | null;
     endDate: string | null;
}