interface InstructionMessageProps {
  title: string;
  description: string;
}

function InstructionMessage({ title, description }: InstructionMessageProps) {
  return (
    <div className="my-16 flex flex-col gap-4 mx-auto">
      <h1 className="text-dark-grey font-instrument text-3xl font-bold">
        {title}
      </h1>
      <p className="text-light-grey">{description}</p>
    </div>
  );
}
export default InstructionMessage;
