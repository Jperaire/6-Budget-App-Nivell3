interface Selections {
    [key: string]: boolean;
}

export const createURL = (
    selections: Selections,
    pages: number,
    languages: number,
    discount: boolean
) => {
    const queryParams = new URLSearchParams();

    queryParams.set("seo", selections.Seo ? "true" : "false");
    queryParams.set("ads", selections.Ads ? "true" : "false");
    queryParams.set("web", selections.Web ? "true" : "false");
    queryParams.set("pages", pages.toString());
    queryParams.set("languages", languages.toString());
    queryParams.set("discount", discount ? "true" : "false");

    return `http://localhost:5173/budget?${queryParams.toString()}`;
};
