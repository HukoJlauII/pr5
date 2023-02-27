const initialState =
    {visibility: false}

export function reducer(state=initialState,action)
{
    switch (action.type)
    {
        case 'CHECKED':
        {
            return{
                visibility: true
            }
        }
        case 'UNCHECKED':
        {
            return{
                visibility: false
            }
        }
        default:
        {
            return{
                visibility: false
            }
        }
    }
}