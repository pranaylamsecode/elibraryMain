<?php

namespace App\Repositories;

use App\Models\Author3;
use App\Repositories\Contracts\AuthorRepositoryInterface3;

/**
 * Class AuthorRepository
 */
class AuthorRepository3 extends BaseRepository3 implements AuthorRepositoryInterface3
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'first_name',
        'last_name',
        'full_name',
    ];

    /**
     * Return searchable fields
     *
     * @return array
     */
    public function getFieldsSearchable()
    {
        return $this->fieldSearchable;
    }

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Author3::class;
    }
}
