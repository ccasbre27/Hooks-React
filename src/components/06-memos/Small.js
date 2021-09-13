import React, { memo } from 'react'

export const Small = memo(({ value }) => {

    console.log("Me volví a llamar", value)

    return (
        <small>
            { value }
        </small>
    )
});
