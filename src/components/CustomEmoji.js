import React from 'react'
import { Emoji } from 'emoji-mart'

const CustomEmoji = (props) => {
    console.log('propsss1', props)
    let polarity = props.polarity || 'Very positive';
    polarity = polarity.toLowerCase()
    const emojiSize = 48;
    const emojiSkin = 3;
    let polarityComponent;
    switch (polarity) {
        case 'very positive':
            polarityComponent = <Emoji emoji={{ id: 'grin', skin: emojiSkin }} size={emojiSize} />  
            break;
        case 'positive':
            polarityComponent = <Emoji emoji={{ id: 'slightly_smiling_face', skin: emojiSkin }} size={emojiSize} />
            break;
        case 'neutral':
            polarityComponent = <Emoji emoji={{ id: 'neutral_face', skin: emojiSkin }} size={emojiSize} />
            break;
        case 'negative':
            polarityComponent = <Emoji emoji={{ id: 'white_frowning_face', skin: emojiSkin }} size={emojiSize} />
            break;
        case 'very negative':
            polarityComponent = <Emoji emoji={{ id: 'rage', skin: emojiSkin }} size={emojiSize} />
            break;
        default:
            polarityComponent = <Emoji emoji={{ id: 'neutral_face', skin: emojiSkin }} size={emojiSize} />
            break;
    }

    return polarityComponent
}

export default CustomEmoji