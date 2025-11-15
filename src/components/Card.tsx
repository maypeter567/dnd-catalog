

export type Contents = {
  test_1: string,
  test_2: string,
}

interface Props {
  content: Contents;
}

const Card = (props: Props) => {

  return (
    <div>
      <li className="card">
        <details>
          <summary>
            <h3 className="card-title">Example Card</h3>
          </summary>
          <p>{props.content.test_1}</p>
        </details>
      </li>
    </div>
  );
}

export default Card;
