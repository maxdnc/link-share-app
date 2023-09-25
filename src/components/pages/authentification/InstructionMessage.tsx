interface InstructionMessageProps {
  title: string;
  description: string;
}

function InstructionMessage({ title, description }: InstructionMessageProps) {
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="text-dark-grey font-instrument text-3xl font-bold">
        {title}
      </h1>
      <p className="text-light-grey">{description}</p>
    </div>
  );
}
export default InstructionMessage;
