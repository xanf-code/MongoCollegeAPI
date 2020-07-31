import { RouterContext } from "https://deno.land/x/oak/mod.ts";

const getColleges = (ctx:RouterContext) => {
    ctx.response.body = 'Get Colleges'
}

export {getColleges}