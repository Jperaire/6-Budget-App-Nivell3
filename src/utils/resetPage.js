export const resetForm = () => {
    setSelections({
        Seo: false,
        Ads: false,
        Web: false,
    });
    setPages(1);
    setLanguages(1);
    setTotal(0);
};
