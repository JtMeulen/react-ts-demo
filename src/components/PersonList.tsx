// Both syntaxes are valid and result in the same. The latter is a shorthand for the former.
type PersonListProps = {
  // names: Array<{ first: string; last: string }>;
  names: { first: string; last: string }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name, index) => (
        <div key={index}>
          {name.first} {name.last}
        </div>
      ))}
    </div>
  );
};
