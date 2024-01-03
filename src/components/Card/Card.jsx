import style from './card.module.css';

const Card = props => {
	return (
		<div className={`${style.organitation} ${style[props.color]}`}>
			<img src={props.src} />
			<p className={style[props.colorName]}>{props.name}</p>
			<p>
				{`${props.calificationNumber} /
				${props.calificaitonTotal}
                `}
			</p>
		</div>
	);
};
export default Card;
