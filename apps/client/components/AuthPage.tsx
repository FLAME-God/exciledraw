import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";

export function AuthPage() {
  return (
    <div>
      <Input label="username" type="text" placeholder="enter your username" />
      <Button variant="secondary"> Signup</Button>
    </div>
  );
}
