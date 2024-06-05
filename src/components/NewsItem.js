import newsItemStyle from "../styles/NewsItem.module.css"
import styled from 'styled-components'

const CircledImage = styled.img`
    border: 2px solid red;
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

const NewsItem = function(props) {
    const { title, description, url, urlToImage } = props.article
    
    return (
        <div>
            <h1 className={newsItemStyle.title}>
                <a href={url} target='_blank' className={newsItemStyle['title-link']} rel="noreferrer noopener">{title}</a>
            </h1>
            <CircledImage src={urlToImage} alt=""/>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem