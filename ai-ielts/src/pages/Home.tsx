import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full h-screen" style={{ backgroundColor: "#FDF2DC" }}>
      <div className="m-8 grid grid-cols-4 gap-4">
        <div className="grid grid-rows-2 gap-4 relative">
          <div className="">
            <div className="flex flex-row m-8">
              <div>
                <img src="/logo.png" alt="" className="" />
              </div>
              <div style={{ color: "#EF601E" }} className="text-6xl">
                aielts.
              </div>
            </div>
            <Card className="relative" style={{ backgroundColor: "#D6E7F7" }}>
              <CardHeader className="flex items-center mb-20">
                <div className="w-3/4">
                  <img src="/imageForTest.png" alt="" />
                </div>
              </CardHeader>

              <CardFooter className="absolute inset-x-0 bottom-0">
                <p
                  className="xl:text-6xl lg:text-4xl md:text-3xl text-center w-full"
                  style={{ color: "#EF601E" }}
                >
                  full test
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
