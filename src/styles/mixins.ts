import { css } from 'styled-components'

export const mixins = {
    fonts: {
        titleXL: css`
            font-family: 'Roboto', sans-serif;
            font-size: 2rem; // 32px
            line-height: 130%;
        `,

        textXL: css`
            font-family: 'Roboto', sans-serif;
            font-size: 1.5rem; // 24px
            line-height: 130%;
        `,

        textLG: css`
            font-family: 'Roboto', sans-serif;
            font-size: 1.25rem; // 20px
            line-height: 130%;
        `,

        text: css`
            font-family: 'Roboto', sans-serif;
            font-size: 1rem; // 16px
            line-height: 130%;
        `,

        textSM: css`
            font-family: 'Roboto', sans-serif;
            font-size: 0.875rem; // 14px
            line-height: 130%;
        `,
    },
}
