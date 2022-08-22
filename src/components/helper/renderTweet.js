export const renderTweet=(text)=>{

    const pattrn=/#\S+/g;

    return {__html: text.replace(pattrn,`<a href='/tags/$&' style='color:cornflowerblue'>$&</a>`)}

}
export const renderTweetInput=(text)=>{

    const pattrn=/#\S+/g;

    return {__html: text.replace(pattrn,`<span href='/tags/$&' style='color:cornflowerblue'>$&</span>`)}

}