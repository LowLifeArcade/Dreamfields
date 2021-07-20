

const RightPanelScriptView = ({state, viewer, view, setViewer}) => {
  return (
    // TODO: add undo function to changes in text area. Maybe store viewer.script.script in a backup field when you hit edit button.
    <div className="transport-script">
    Revision: {viewer.script.rev}
    {state.machineState !== view.edit ? (
      <>
        <div
          dangerouslySetInnerHTML={{
            __html: viewer.script.script,
          }}></div>
      </>
    ) : (
      <>
        <textarea
          cols="70"
          rows="50"
          type="text"
          value={viewer.script.script}
          onChange={(e) =>
            setViewer({
              ...viewer,
              script: {
                ...viewer.script,
                script: e.target.value,
              },
            })
          }
        />
      </>
    )}
  </div>
  )
}

export default RightPanelScriptView
