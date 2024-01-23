import { DefaultTemplate } from "../components/DefaultTemplate";
import { Form } from "../components/Form";
import { TaskSection } from "../components/TaskSection";

export const HomePage = () => {
  return (
    <DefaultTemplate>
      <Form />
      <TaskSection />
    </DefaultTemplate>
  );
};
