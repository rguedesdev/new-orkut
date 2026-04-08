"use client";

// Imports Principais
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Style Sheet CSS
import styles from "./createcommunity.module.css";

// Componentes
import { Input } from "@/components/Input/page";
import { count } from "console";

// Schema de validação usando Zod
const CreateCommunitySchema = z.object({
  name: z
    .string()
    .min(5, "Insira pelo menos 5 caracteres")
    .max(120, "Insira no máximo 120 caracteres"),
  description: z.string().nonempty("A descrição é obrigatória"),
  category: z.string(),
  privacy: z.string(),
  country: z.string(),
  language: z.string(),
});

// Tipo para os dados do formulário, inferido a partir do schema
type TCreateCommunityFormData = z.infer<typeof CreateCommunitySchema>;

function CreateCommunity() {
  const [name, setName] = useState("");

  // Configuração do React Hook Form com validação Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateCommunityFormData>({
    resolver: zodResolver(CreateCommunitySchema),
  });

  function handleCreateCommunity(e) {
    e.preventDefault();

    console.log("Dados recebidos:", name);
  }

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <h1 className={styles.communityTitle}>Criar Comunidade</h1>
        <form onSubmit={handleSubmit(handleCreateCommunity)} autoComplete="off">
          <Input
            inputLabel="Nome da Comunidade"
            inputType="text"
            inputID="name"
            inputPlaceholder="Digite o nome da Comunidade"
            register={register("name")}
            error={errors.name?.message}
          />

          <div>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Descrição</legend>
              <textarea
                className={styles.textarea}
                placeholder="Descrição da Comunidade"
                {...register("description")}
              />
            </fieldset>
            {errors.description && (
              <span
                className={styles.error}
              >{`※ ${errors.description.message}`}</span>
            )}
          </div>

          <select name="categoria" id="categoria">
            <option value="1">Anime</option>
            <option value="2">Manga</option>
          </select>

          <Input
            inputLabel="Categoria da Comunidade"
            inputType="text"
            inputID="category"
            inputPlaceholder="Digite a categoria da Comunidade"
            register={register("category")}
            error={errors.category?.message}
          />

          <Input
            inputLabel="Qual a privacidade da Comunidade?"
            inputType="text"
            inputID="privacy"
            inputPlaceholder="Digite a privacidade da Comunidade"
            register={register("privacy")}
            error={errors.privacy?.message}
          />

          <Input
            inputLabel="Qual o país da Comunidade?"
            inputType="text"
            inputID="country"
            inputPlaceholder="Qual o país da Comunidade?"
            register={register("country")}
            error={errors.country?.message}
          />

          <Input
            inputLabel="Qual o idioma da Comunidade?"
            inputType="text"
            inputID="language"
            inputPlaceholder="Qual o idioma da Comunidade?"
            register={register("language")}
            error={errors.language?.message}
          />

          <button className={styles.btnCreate} type="submit">
            Criar Comunidade
          </button>
        </form>
      </main>
    </div>
  );
}

export default CreateCommunity;
