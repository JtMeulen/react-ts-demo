type RandomNumberType = {
  value: number;
};

type PositiveType = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeType = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroType = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveType | NegativeType | ZeroType;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      <span>{value}</span>
      {isPositive && <span>Positive</span>}
      {isNegative && <span>Negative</span>}
      {isZero && <span>Zero</span>}
    </div>
  );
};
