import React from 'react';

const initialBreakdown = {
  id: null,
  shot: null,
  complexity: '',
  assets: '',
  FX: '',
  characters: '',
  backgrounds: '',
  description: '',
  breakdown: '',
  preProdBoard: '',
};

const RightPanelBreakdownView = ({
  state,
  userContext,
  viewer,
  setActiveShot,
  activeShot,
}) => {
  const handleAddBreakdown = () => {
    dispatch(['CONFIRM', [...state.shotList, initialBreakdown]]);
  };
  return (
    <div className="transport-breakdown">
      {viewer.shotList.map((shot, i) => (
        <div
          className={`transport-breakdown-shot ${
            state && state.checkedOutShot.id === shot.id && 'checked-out'
          } ${activeShot.id === shot.id && 'active'} ${
            state &&
            state.checkedOutShot.user.name != userContext.state.user.name &&
            'not-user'
          }`}
          onClick={() => setActiveShot(shot)}>
          <h3>Shot Number {i + 1}</h3>
          <div>
            <strong>Complexity: </strong>
            {shot.complexity}
          </div>
          <div>{shot.breakdown}</div>
          <div>
            <strong>Characters: </strong>
            {shot.characters}
            <br />
            <strong>Assets: </strong>
            {shot.assets}
            <br />
            <strong>Backgrounds: </strong>
            {shot.backgrounds}
          </div>
          {state &&
          state.checkedOutShot &&
          state.checkedOutShot.id === shot.id ? (
            <div>
              <strong>
                Checked out by{' '}
                {state &&
                  state.checkedOutShot &&
                  state.checkedOutShot.user.name}
              </strong>
            </div>
          ) : (
            <div>
              <strong>Open for checkout</strong>
            </div>
          )}
        </div>
      ))}
      <div className="add" onClick={handleAddBreakdown}>
        <i class="fas fa-plus fa-2x"></i>
      </div>
    </div>
  );
};

export default RightPanelBreakdownView;
