import { Icon } from './Icon';

  function Button() {
      return (
        <>
        <Icon iconName="Stopwatch" color="royalblue" size={96} className="align-top" />
      <Icon iconName="ArrowRight" color="red" size={12} />
      <Icon iconName="HouseDoor" color="green" size={40} />
          </>
    );
}

export default Button;