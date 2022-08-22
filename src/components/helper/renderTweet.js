export const renderTweet=(text)=>{

    const pattrn=/#\S+/g;

    return {__html: text.replace(pattrn,`<a href='/tags/$&' style='color:cornflowerblue'>$&</a>`)}

}