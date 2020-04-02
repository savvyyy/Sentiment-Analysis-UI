import React from 'react'
import { Emoji } from 'emoji-mart'

const CustomEmoji = (props) => {
    const polarity = props.polarity || 'Very positive';
    const emojiSize = 48;
    const emojiSkin = 3;
    let polarityComponent;
    switch (polarity) {
        case 'Very positive':
            polarityComponent = <Emoji emoji={{ id: 'grin', skin: emojiSkin }} size={emojiSize} />  
            break;
        case 'Positive':
            polarityComponent = <Emoji emoji={{ id: 'slightly_smiling_face', skin: emojiSkin }} size={emojiSize} />
            break;
        case 'Neutral':
            polarityComponent = <Emoji emoji={{ id: 'neutral_face', skin: emojiSkin }} size={emojiSize} />
            break;
        case 'Negative':
            polarityComponent = <Emoji emoji={{ id: 'white_frowning_face', skin: emojiSkin }} size={emojiSize} />
            break;
        case 'Very negative':
            polarityComponent = <Emoji emoji={{ id: 'rage', skin: emojiSkin }} size={emojiSize} />
            break;
    }

    return polarityComponent
}

export default CustomEmoji