import React from 'react'
import { Emoji } from 'emoji-mart'

const CustomEmoji = (props) => {
    const polarity = props.polarity || 1;
    const emojiSize = 48;
    const emojiSkin = 3;
    let polarityComponent;
    switch (polarity) {
        case 1:
            polarityComponent = <Emoji emoji={{ id: 'grin', skin: emojiSkin }} size={emojiSize} />  
            break;
        case 2:
            polarityComponent = <Emoji emoji={{ id: 'slightly_smiling_face', skin: emojiSkin }} size={emojiSize} />
            break;
        case 3:
            polarityComponent = <Emoji emoji={{ id: 'neutral_face', skin: emojiSkin }} size={emojiSize} />
            break;
        case 4:
            polarityComponent = <Emoji emoji={{ id: 'white_frowning_face', skin: emojiSkin }} size={emojiSize} />
            break;
        case 5:
            polarityComponent = <Emoji emoji={{ id: 'rage', skin: emojiSkin }} size={emojiSize} />
            break;
    }

    return polarityComponent
}

export default CustomEmoji