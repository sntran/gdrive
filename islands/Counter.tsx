import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [files, setFiles] = useState<FileList | null>(null);

  const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    setFiles(files);
  };

  const submit = async (event: Event) => {
    event.preventDefault();
    const { target } = event as SubmitEvent;
    const { action } = target as HTMLFormElement;

    await fetch(action, {
      method: "PUT",
      body: files![0], // This doesn't work
      // body: "Hello World", // This works
    });
  }

  return (
    <form
      method="PUT"
      class="flex gap-2 w-full"
      onSubmit={submit}
    >
      <input name="file" type="file" onChange={onFileChange} />
      <Button type="submit">Upload</Button>
    </form>
  );
}
