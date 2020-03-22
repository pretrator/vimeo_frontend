export const datecompare=(c)=>{
    return (aa,bb)=>{
    const a=new Date(aa[c])
    const b=new Date(bb[c])
    if(a===b) return 0
    else if(a>b) return 1
    else return -1
    }
}

export const valcompare=(c)=>{
    return (aa,bb)=>{
        const a=aa[c]||0
        const b=bb[c]||0
        if(a===b) return 0
        else if(a>b) return 1
        else return -1
        }
}

