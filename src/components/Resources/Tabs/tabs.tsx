import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SimpleSelect from "../Select/select"
import { DatePicker } from "../DatePicker/datepicker"

export default function TabsItem() {
    return (
        <Tabs defaultValue="item" className="w-[400px] max-w-3xl mx-auto justify-center">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="group">Categoria</TabsTrigger>
                <TabsTrigger value="item">Item</TabsTrigger>
            </TabsList>
            <TabsContent value="item">
                <Card>
                    <CardHeader>
                        <CardTitle>Cadastrar Item</CardTitle>
                        <CardDescription>
                            Cadastre um item para listagem.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Nome item</Label>
                            <Input id="name" defaultValue="Item genérico" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="category">Categoria</Label>
                            <SimpleSelect
                                options={[
                                    { value: 'D', description: "Débito" },
                                    { value: 'C', description: "Crédito" },
                                    { value: 'P', description: "Parcelado" },
                                ]}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="value">Valor</Label>
                            <Input id="value" defaultValue="R$ 10,00" />
                        </div>
                        <div className="space-y-1">
                            <Label className="block" htmlFor="date">Data</Label>
                            <DatePicker />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Cadastrar</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="group">
                <Card>
                    <CardHeader>
                        <CardTitle>Cadastrar Categoria</CardTitle>
                        <CardDescription>
                            Cadastre novas categorias de item.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Nome Categoria</Label>
                            <Input id="current" type="group" defaultValue="Categoria genérica" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Cadastrar</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
