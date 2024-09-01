"use client"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { Form,FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
  
  export function FormCreateMateriaDialog() {

    const form = useForm();

    const onSubmit = form.handleSubmit((data) =>
    {
        console.log(data);
    })

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>
            <PlusIcon className="mr-2"/>
            <span>Criar</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Criar Materia</AlertDialogTitle>
            <AlertDialogDescription>
                Digite abaixo o nome da Materia que você deseja criar
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Form {...form}>
                <form onSubmit={onSubmit} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="nameMateria"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} value={field.value || ""}/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Criar</Button>
                </form>
            </Form>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  