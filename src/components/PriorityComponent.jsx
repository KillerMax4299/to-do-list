

const PriorityComponent = ({ prio , viewPage, status}) => {
  const colorMap = {
    high: {
      text: "text-red-500",
      background: "bg-red-200/10",
      border: "border-red-500",
    },
    normal: {
      text: "text-amber-500",
      background: "bg-amber-200/10",
      border: "border-amber-500",
    },
    low: {
      text: "text-green-500",
      background: "bg-green-200/10",
      border: "border-green-500",
    },
  };

  const styles = colorMap[prio.toLowerCase()];

  const {text, background, border} = styles

  if (viewPage) {
    return (
      <div className="flex justify-start mx-4">
        <div
          className={`text-center w-fit px-3 border rounded-xl ${text} ${background} ${border} font-medium `}
        >
          {prio+" priority"}
        </div>
      </div>
    );
  }
  else if (status) {
    return (
      <div className="flex justify-start mx-4">
        <div
          className={`text-center w-fit px-3 border rounded-xl border-blue-500 bg-blue-200/10 text-blue-500 font-medium `}
        >
          Completed
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-20 flex justify-center mx-1">
      <div
        className={`text-center w-fit px-3 border rounded-xl ${text} ${background} ${border} font-medium `}
      >
        {prio}
      </div>
    </div>
  );
};

export default PriorityComponent;
