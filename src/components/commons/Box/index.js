import PropTypes from 'prop-types'

const Box = (props) => (
    <div 
        className="cell-box" 
        onClick={props.onClick} 
        id={props.id} 
    >
        <img src={props.src} alt={props.alt} className="cell-icon" />
    </div>
);

Box.propTypes = {
    onClick: PropTypes.func,
    id: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,

};

Box.defaultProp = {
    onClick: () => {},
    id: '',
    src: '',
    alt: '',

}

export default Box