import {
  ConditionItem,
  ConditionsList,
  NumConditionText,
} from './RentalConditionsList.styled';

export const RentalConditionsList = ({ conditionsArray }) => (
  <ConditionsList>
    {conditionsArray.map(condition => {
      const improvedCondition = condition.split(':');

      return (
        <ConditionItem key={condition}>
          {improvedCondition[0]}
          {improvedCondition[1] && ':'}
          {improvedCondition[1] && (
            <NumConditionText>{improvedCondition[1]}</NumConditionText>
          )}
        </ConditionItem>
      );
    })}
  </ConditionsList>
);
