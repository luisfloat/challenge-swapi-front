import { useForm } from "react-hook-form";
import Input from "../Form/Input";
import Textarea from "../Form/Textarea";

const CommentForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data, reset))}
      className="w-full md:w-[434px] flex flex-col gap-4"
    >
      <div className="flex gap-4 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[50%]">
          <label htmlFor="name" className="hidden">
            Name:
          </label>
          <Input
            type="text"
            id="name"
            placeholder="Nome"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>
        <div className="w-full md:w-[50%]">
          <label htmlFor="email" className="hidden">
            Email:
          </label>
          <Input
            type="email"
            id="email"
            placeholder="E-mail"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <span className="text-red-500">
              Email is required and must be a valid email address
            </span>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="hidden">
          Comment:
        </label>
        <Textarea
          id="comment"
          placeholder="Comentário"
          {...register("comment", { required: true })}
        />
        {errors.comment && (
          <span className="text-red-500">Comment is required</span>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full md:w-[434px] py-3 rounded text-white bg-gradient-to-r from-[#EB5757] to-[#F2994A] hover:shadow-md"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
